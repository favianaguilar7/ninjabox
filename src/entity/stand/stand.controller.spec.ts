// stand.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { StandController } from './stand.controller';
import { StandService } from './stand.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module'; 

describe('StandController (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule], // Importa el módulo principal de tu aplicación
            controllers: [StandController],
            providers: [StandService],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('/stands (GET)', () => {
        return request(app.getHttpServer())
            .get('/stands')
            .expect(200)
            .expect((res) => {
                expect(res.body).toBeInstanceOf(Array);
                expect(res.body.length).toBeGreaterThan(0);
            });
    });
});
