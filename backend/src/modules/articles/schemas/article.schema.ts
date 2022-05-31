import { Document } from "mongoose";

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  timestamp: number;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
