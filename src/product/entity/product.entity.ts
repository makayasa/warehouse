import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductStocks } from './product-stocks.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid', { name: 'uuid' })
  uuid: string;

  @Column()
  name: string;

  // @Column()
  // quantity: number

  @OneToMany(() => ProductStocks, (stock) => stock.product, {
    cascade: true,
    eager: true,
  })
  stocks: ProductStocks[];

  @Column()
  image_url: string;
}
