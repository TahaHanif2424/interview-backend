import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/createJobDTO';
import { createJobFn, getAllJobsFn } from './functions';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  createJob(dto: CreateJobDto) {
    return createJobFn(this.prisma, dto);
  }

  getAllJobs(userId: string) {
    return getAllJobsFn(this.prisma, userId);
  }
}
