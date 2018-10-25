import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Array<Product>;
  private imgUrl='http://placehold.it/320x150';
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"铅笔",1.99,3.5,"这是第1个商品的描述",["办公用品","学习用品"]),
      new Product(2,"记事本",2.99,4,"这是第2个商品的描述",["学习用品","记事本"]),
      new Product(3,"暖宝宝",13.99,4.8,"这是第3个商品的描述",["日常用品","暖宝宝"]),
      new Product(4,"抱枕",15.99,3.7,"这是第4个商品的描述",["家居用品","日常用品"]),
      new Product(5,"床单被罩",78.99,5,"这是第5个商品的描述",["家居","家纺"]),
      new Product(6,"足贴",14.99,4.5,"这是第6个商品的描述",["养生","保健"]),
    ]
    this.products.push(new Product(6,"足贴",14.99,4.5,"这是第6个商品的描述",["养生","保健"]))
  }

}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){ }
}