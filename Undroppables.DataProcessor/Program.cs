using Microsoft.Extensions.Hosting;

// See https://aka.ms/new-console-template for more information
var builder = Host.CreateApplicationBuilder(args);

var host = builder.Build();

Console.WriteLine("Hello, World! The Data Processor is running.");

host.Run();
