import { CreateJobDto } from './dto/createJobDTO';
import { PrismaService } from '../prisma/prisma.service';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Jobs } from '@prisma/client';

export const createJobFn = async (
  prisma: PrismaService,
  data: CreateJobDto,
): Promise<Jobs> => {
  try {
    return await prisma.jobs.create({
      data: {
        title: data.title,
        description: data.description,
        requirements: data.requirements,
        location: data.location,
        userId: data.userId,
        specifications: data.specification,
        department: data.department,
        salary: data.salary,
        status: data.status,
        type: data.type,
      },
    });
  } catch (error) {
    console.error('Actual error:', error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new BadRequestException('A job with this data already exists');
      }
      if (error.code === 'P2003') {
        throw new NotFoundException('User not found');
      }
    }
    throw new InternalServerErrorException('Failed to create job: ' + error);
  }
};

export const getJobByIdFn = async (
  prisma: PrismaService,
  id: number,
): Promise<Jobs> => {
  try {
    const job = await prisma.jobs.findUnique({ where: { id } });
    if (!job) {
      throw new NotFoundException(`Job with id ${id} not found`);
    }
    return job;
  } catch (error) {
    if (error instanceof NotFoundException) {
      throw error;
    }
    throw new InternalServerErrorException('Failed to fetch job');
  }
};

export const getAllJobsFn = async (
  prisma: PrismaService,
  userId: string,
): Promise<Jobs[]> => {
  try {
    return await prisma.jobs.findMany({
      where: {
        userId: userId,
      },
    });
  } catch (error) {
    throw new InternalServerErrorException('Failed to fetch jobs: ' + error);
  }
};

export const deleteJobFn = async (
  prisma: PrismaService,
  id: number,
): Promise<Jobs> => {
  try {
    return await prisma.jobs.delete({ where: { id } });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Job with id ${id} not found`);
      }
    }
    throw new InternalServerErrorException('Failed to delete job');
  }
};
