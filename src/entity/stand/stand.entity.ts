// stand.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Stand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    column: number;

    @Column()
    row: number;
}
