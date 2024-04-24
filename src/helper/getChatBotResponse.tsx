export function getChatBotResponse(input: string): string {
  if (
    input === "hello" ||
    input === "hii" ||
    input === "Hey" ||
    input === "Hii" ||
    input === "Hello"
  ) {
    return `Hello There, welcome to data vidhya, how may i help you ?`;
  }

  if (
    input === "Python" ||
    input === "python" ||
    input === "tell me about python"
  ) {
    return `Python: Versatile, readable, extensive libraries, beginner-friendly, robust, scalable, popular, adaptable, diverse, efficient`;
  }

  if (
    input === "Apache Spark with Databricks for Data Engineers" ||
    input.includes("Apache Spark") ||
    input.includes("Databricks") ||
    input === "Apache" ||
    input === "apache spark" ||
    input === "apache"
  ) {
    return `Apache Spark with Databricks for Data Engineers is a hands on course where u will deep dive into apache, learn about more here http://localhost:3000/all-course`;
  }

  if (input.includes("refund")) {
    return `Will update soon!!!`;
  }

  if (
    input.includes("datavidhy") ||
    input.includes("Data") ||
    input.includes("DataVidhya")
  ) {
    return `DataVidhya is a best platform for learning data engineering `;
  }
  return `Sorry ask something similar to our site`;
}
