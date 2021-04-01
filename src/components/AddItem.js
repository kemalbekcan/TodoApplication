import React from "react";
import ItemList from "./ItemList";
// Add Class
export default class AddItem extends React.Component {
    constructor(props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.resetItem = this.resetItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.state = {
        item: [],
      };
    }
    //component oluşturma
    componentDidMount(){
      console.log("component oluşturuldu !!!")
      const json = localStorage.getItem("item");
      const item = JSON.parse(json);
      if(item){
        this.setState({
          item: item
        })
      }
      console.log(json);
    }
    //component güncelleme
    componentDidUpdate(prevProps,prevState){
      if(prevState.item.length !== this.state.item.length){
        const json = JSON.stringify(this.state.item);
        localStorage.setItem("item", json);
        console.log("component güncellendi !!!")
      }
    }
    //component silme
    componentWillUnmount(){
      console.log("component silindi !!!")
    }
    // diziye eleman ekleme
    addItem(e) {
      e.preventDefault();
      let additem = e.target.elements.txtItem.value;
      if (!additem) {
        return "please enter the element you want to add";
      } 
      else if (additem) {
        console.log(additem);
        this.setState((prevState) => {
          return { item: prevState.item.concat(additem) };
        });
      }
    }
    // tüm diziyi resetlemek.
    resetItem(e) {
      e.preventDefault();
      this.setState({
        item: [],
      });
      console.log("reset");
    }
    // seçilen elemanı silmek
    deleteItem(List){
      this.setState((prevState) => {
        // filter ile seçilen elemanı diziden seçmek
       const arr = prevState.item.filter((i) => {
        // i değeri eşit değilse dizideki diğer elemanları döndürmek  
        return List != i
        })
        return {
          item: arr
        }
      })
    }
    render() {
      return (
        <div className="List my-3">
          <h3 className="ListHeader">Now Here:</h3>
          {/*deleteItem veriyi Itemlist adlı componente göndermek. */}
          <ItemList itemListele={this.state.item} deleteItem={this.deleteItem} />
          <form onSubmit={this.addItem}>
            <label className="mt-2 font-weight-bold" htmlFor="txtItem">Add Item :</label>
            <input className="form-control mb-3 border border-danger font-weight-bold" type="text" name="txtItem" id="txtItem"></input>
            <button className="btn btn-outline-primary" type="submit">Add Item</button>
          </form>
          <br></br>
          
          <button className="btn btn-outline-danger" onClick={this.resetItem}>Reset Item</button>
        </div>
      );
    }
  }