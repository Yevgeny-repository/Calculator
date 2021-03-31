using Calculator.BL;
using Calculator.Sahred.Model;
using EnsureThat;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Calculator.API.Controllers
{
    [Route("api/calculate/")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly ILogger<CalculatorController> _logger;
        private ICalcService _calcService;

        public CalculatorController(ICalcService calcService,
            ILogger<CalculatorController> logger)
        {
            Ensure.That(logger, nameof(logger)).IsNotNull();
            _logger = logger;

            Ensure.That(calcService, nameof(calcService)).IsNotNull();
            _calcService = calcService;
        }

        // GET: api/<CalculateController>
        [HttpGet]
        public IActionResult Get(string expr)
        {
            var response = new CalcResponse
            {
                Result = _calcService.EvaluateExpression(expr)
            };
            return Ok(response);
        }
    }
}