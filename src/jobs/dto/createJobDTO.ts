export class CreateJobDto {
  title!: string;
  description?: string;
  requirements?: string;
  location?: string;
  userId!: string;
}
