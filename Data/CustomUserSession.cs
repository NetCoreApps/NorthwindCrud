using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using ServiceStack;
using ServiceStack.Web;

namespace NorthwindCrud.Data;

public class CustomUserSession : AuthUserSession
{
}
