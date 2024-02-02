using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using StockExchange.DTO;
using StockExchange.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace StockExchange.Controllers
{
    [Route("api/[controller]")]
    [ApiController]//Resourse User
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> usermanger;
        private readonly IConfiguration config;

        public AccountController(UserManager<ApplicationUser> usermanger, IConfiguration config)
        {
            this.usermanger = usermanger;
            this.config = config;
        }
        //Create Account new User "Registration" "Post"
        [HttpPost("register")]//api/account/register
        public async Task<IActionResult> Registration(RegisterUserDto userDto)
        {
            if (ModelState.IsValid)
            {
                //save
                ApplicationUser user = new ApplicationUser();
                user.UserName = userDto.UserName;
                user.Email = userDto.Email;
                IdentityResult result = await usermanger.CreateAsync(user, userDto.Password);
                if (result.Succeeded)
                {
                    return Ok("Account Added Success");
                }
                return BadRequest(result.Errors.FirstOrDefault());
            }
            return BadRequest(ModelState);
        }


        //Check Account Valid "Login" "Post"
        [HttpPost("login")]//api/account/login
        public async Task<IActionResult> Login(LoginUserDto userDto)
        {
            if (ModelState.IsValid == true)
            {
                //check - create token
                ApplicationUser user = await usermanger.FindByNameAsync(userDto.UserName);
                if (user != null)//user name found
                {
                    bool found = await usermanger.CheckPasswordAsync(user, userDto.Password);
                    if (found)
                    {
                        //Claims Token
                        var claims = new List<Claim>();
                        claims.Add(new Claim(ClaimTypes.Name, user.UserName));
                        claims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id));
                        claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));

                        //get role
                        var roles = await usermanger.GetRolesAsync(user);
                        foreach (var itemRole in roles)
                        {
                            claims.Add(new Claim(ClaimTypes.Role, itemRole));
                        }
                        SecurityKey securityKey =
                            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JWT:Secret"]));

                        SigningCredentials signincred =
                            new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);//HmacSha256
                        //Create token
                        JwtSecurityToken mytoken = new JwtSecurityToken(
                            issuer: config["JWT:ValidIssuer"],//url web api
                            audience: config["JWT:ValidAudiance"],//url consumer angular
                            claims: claims,
                            expires: DateTime.Now.AddDays(7),
                            signingCredentials: signincred
                            );
                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(mytoken),
                            expiration = mytoken.ValidTo
                        });
                    }
                }
                return Unauthorized();

            }
            return Unauthorized();
        }
    }
}
