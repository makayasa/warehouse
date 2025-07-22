import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductStocks {
  @PrimaryGeneratedColumn('uuid', { name: 'uuid' })
  uuid: string

  @Column()
  warehouse_name: string

  @Column()
  quantity: number

  @ManyToOne(() => Product, product => product.stocks, {onDelete: "CASCADE"})
  product: Product
}
