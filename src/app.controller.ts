import { Controller, Get, Post } from '@nestjs/common'
import { team_member } from '@prisma/client'
import { AppService } from './app.service'
import { PrismaService } from './database/prisma.service'

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private prisma: PrismaService,
	) {}

	@Get()
	getHello(): string {
		return this.appService.getHello()
	}

	@Post('store')
	async createMember(): Promise<team_member> {
		try {
			return await this.prisma.team_member.create({
				data: {
					id: '1',
					name: 'John Doe',
					function: 'Programmer',
				},
			})
		} catch (e) {
			return e.message
		}
	}
}
