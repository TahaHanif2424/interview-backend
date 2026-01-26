import { Body, Controller, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/createJobDTO';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post('create')
  createJob(@Body() dto: CreateJobDto) {
    return this.jobsService.createJob(dto);
  }

  @Post('all')
  getAllJobs(@Body('userId') userId: string) {
    return this.jobsService.getAllJobs(userId);
  }
}
