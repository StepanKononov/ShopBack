import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column('decimal')
    price!: number;

    @Column('int')
    stock!: number;

    @Column('decimal', { default: 0 })
    discount!: number;
}