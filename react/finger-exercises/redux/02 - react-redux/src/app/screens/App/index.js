import React, { Component, Fragment } from 'react';
import store from '@redux/store';
import actionsCreators from '@redux/book/actions';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  state = {
    books: [],
    bookSelected: []
  };

  componentDidMount() {
    store.subscribe(() => {
      const { books, bookSelected } = store.getState();
      this.setState({ books, bookSelected });
    });

    this.getBooks();
  }

  onSearch = value => {
    store.dispatch(actionsCreators.searchBook(value));
  };

  getBooks = () => setTimeout(() => store.dispatch(actionsCreators.getBooks()), Math.random() * 100);

  addToCart = item => {
    store.dispatch(actionsCreators.addToCart(item));
  };

  addItem = itemId => {
    store.dispatch(actionsCreators.addItem(itemId));
  };

  removeItem = itemId => {
    const { bookSelected } = this.state;
    const bookS = bookSelected.find(book => book.id === itemId);
    if (bookS.quantity > 1) {
      store.dispatch(actionsCreators.subtractItem(itemId));
    } else {
      this.removeBook(itemId);
    }
  };

  removeBook = itemId => {
    store.dispatch(actionsCreators.removeItem(itemId));
  };

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeBook,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.state.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {this.state.books.length ? (
            this.state.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.state.bookSelected.length ? (
          <ShoppingCart data={this.state.bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
