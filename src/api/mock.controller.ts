import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MockService } from '../services';
import { AccountModel } from '../models';

@ApiBearerAuth()
@ApiTags('generate')
@Controller('generate')
export class MockController {
  constructor(private readonly mockService: MockService) {}

  @Get('/byLocale/:locale')
  @ApiOperation({ summary: 'Generate data base on a locality' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async byLocale(@Param('locale') locale: string): Promise<any> {
    return this.mockService.byLocale(locale);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    // type: ,
  })
  findOne(@Param('id') id: string): any {
    return {};
  }
}
