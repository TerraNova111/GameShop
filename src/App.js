import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import ItemInfo from "components/ItemInfo";
import gamesSet from "components/GamesSet";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderList: [],
      currentItems: [],
      items: gamesSet,
      ItemInfo: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToList = this.addToList.bind(this)
    this.deleteFromList = this.deleteFromList.bind(this)
    this.categorySelect = this.categorySelect.bind(this)
    this.itemInfoShow = this.itemInfoShow.bind(this)
    this.searchItems = this.searchItems.bind(this);
  }

  render() {
    return (
      <div className="wrapper" >


        <Header
          onSearch={this.searchItems}
          orderList={this.state.orderList}
          onDelete={this.deleteFromList}
        />

        <Items
          categorySelect={this.categorySelect}
          itemInfoShow={this.itemInfoShow}
          items={this.state.currentItems}
          onAdd={this.addToList}

        />

        {this.state.ItemInfo && <ItemInfo onAdd={this.addToList} itemInfoShow={this.itemInfoShow} item={this.state.fullItem}></ItemInfo>}
        <Footer />
      </div>
    )
  }

  searchItems(searchTerm) {
    const filteredItems = this.state.items.filter(el =>
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.setState({
      currentItems: filteredItems
    });
  }


  

  itemInfoShow(item) {
    this.setState({ fullItem: item })
    this.setState({ ItemInfo: !this.state.ItemInfo })
  }



  categorySelect(category) {
    if (category === 'all') {
      this.setState({
        currentItems: this.state.items
      })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteFromList(id) {
    this.setState({ orderList: this.state.orderList.filter(el => el.id !== id) })
  }

  addToList(item) {
    let isInOrderList = false;

    this.state.orderList.forEach(el => {
      if (el.id === item.id) {
        isInOrderList = true
      }
    })

    if (!isInOrderList) {
      this.setState({ orderList: [...this.state.orderList, item] })
    }
  }
}

export default App;
