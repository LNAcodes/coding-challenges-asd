function getMockDB() {
  return {
    query(select: string): string[] {
      return ["lorem", "ipsum", "dolor"];
    },
  };
}

interface LogRepository {
  query(select: string): string[];
}

class MockLogRepository implements LogRepository {
  query(select: string): string[] {
    const db = getMockDB();
    return db.query(select);
  }
}

interface LogFormatter {
  format(logs: string[]): string;
}

class JsonFormatter implements LogFormatter {
  format(logs: string[]): string {
    return JSON.stringify(logs);
  }
}

class CsvFormatter implements LogFormatter {
  format(logs: string[]): string {
    return logs.map((l) => `${l}`).join("\n");
  }
}

class XmlFormatter implements LogFormatter {
  format(logs: string[]): string {
    return `<logs>${logs.map((l) => `<log>${l}</log>`).join("")}</logs>`;
  }
}

function createFormatter(format: "json" | "csv" | "xml"): LogFormatter {
  switch (format) {
    case "json":
      return new JsonFormatter();
    case "csv":
      return new CsvFormatter();
    case "xml":
      return new XmlFormatter();
    default:
      throw new Error("Unknown format");
  }
}

class LogExporter {
  constructor(private readonly repo: LogRepository) {}

  async exportLogs(format: "json" | "csv" | "xml") {
    const logs = await this.repo.query("SELECT * FROM system_logs");
    const formatter = createFormatter(format);
    return formatter.format(logs);
  }
}

const exporter = new LogExporter(new MockLogRepository());

exporter.exportLogs("json").then(console.log);
exporter.exportLogs("csv").then(console.log);
exporter.exportLogs("xml").then(console.log);
