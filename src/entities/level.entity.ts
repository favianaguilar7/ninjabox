import {
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    Column,
    JoinColumn,
} from 'typeorm';
import { Package } from './paquete.entity';
import { Stand } from './stand.entity';

@Entity()
export class Level {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weightLimit: number;

    @Column()
    xStand: number;

    @Column()
    yStand: number;

    @Column()
    zStand: number;

    @OneToMany(() => Package, (paquete) => paquete.level)
    packages: Package[];

    @Column()
    standId: number;

    @ManyToOne(() => Stand)
    @JoinColumn({ name: 'standId' })
    stand: Stand;
}