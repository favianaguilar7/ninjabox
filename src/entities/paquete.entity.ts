import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Level } from './level.entity';

@Entity()
export class Package {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    boxId: number;

    @Column()
    weight: number;

    @Column()
    price: number;

    @Column()
    arrivalDate: Date;

    @Column()
    departureDate: Date;

    @Column({ default: false })
    fragile: boolean;

    @Column()
    xDimension: number;

    @Column()
    yDimension: number;

    @Column()
    zDimension: number;

    @ManyToOne(() => Level)
    @JoinColumn({ name: 'levelId' })
    level: Level;
}