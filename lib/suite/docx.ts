import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  TextRun,
  AlignmentType,
} from "docx";

export type DocxBlock =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "bold"; text: string }
  | { type: "list"; items: string[] }
  | { type: "kv"; rows: { key: string; value: string }[] };

export type DocxSpec = {
  title: string;
  subtitle?: string;
  generatedAt: string;
  blocks: DocxBlock[];
};

function paraTitle(text: string) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 36 })],
    alignment: AlignmentType.LEFT,
    spacing: { after: 200 },
  });
}

function paraSubtitle(text: string) {
  return new Paragraph({
    children: [new TextRun({ text, italics: true, color: "666666", size: 22 })],
    spacing: { after: 200 },
  });
}

function blockToParagraphs(b: DocxBlock): Paragraph[] {
  if (b.type === "h1") return [new Paragraph({ text: b.text, heading: HeadingLevel.HEADING_1 })];
  if (b.type === "h2") return [new Paragraph({ text: b.text, heading: HeadingLevel.HEADING_2 })];
  if (b.type === "h3") return [new Paragraph({ text: b.text, heading: HeadingLevel.HEADING_3 })];
  if (b.type === "p") return [new Paragraph({ text: b.text })];
  if (b.type === "bold") {
    return [new Paragraph({ children: [new TextRun({ text: b.text, bold: true })] })];
  }
  if (b.type === "list") {
    return b.items.map(
      (item) => new Paragraph({ text: item, bullet: { level: 0 } }),
    );
  }
  if (b.type === "kv") {
    return b.rows.map(
      (r) =>
        new Paragraph({
          children: [
            new TextRun({ text: `${r.key}: `, bold: true }),
            new TextRun({ text: r.value }),
          ],
        }),
    );
  }
  return [];
}

export async function renderDocx(spec: DocxSpec): Promise<Buffer> {
  const headerParas: Paragraph[] = [
    paraTitle(spec.title),
    ...(spec.subtitle ? [paraSubtitle(spec.subtitle)] : []),
    paraSubtitle(`Generated ${spec.generatedAt}`),
  ];
  const bodyParas = spec.blocks.flatMap(blockToParagraphs);
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [...headerParas, ...bodyParas],
      },
    ],
  });
  return await Packer.toBuffer(doc);
}
