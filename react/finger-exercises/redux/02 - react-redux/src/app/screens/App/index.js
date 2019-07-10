import React, { Component, Fragment } from 'react';
import { arrayOf, func } from 'prop-types';
import { bookSelectedPropType, bookPropType } from '@constants/propTypes';
import { connect } from 'react-redux';
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
    this.getBooks();
  }

  onSearch = value => {
    this.props.searchBook(value);
  };

  getBooks = () => setTimeout(() => this.props.getBooks(), Math.random() * 100);

  addToCart = item => {
    this.props.addToCart(item);
  };

  addItem = itemId => {
    this.props.addItem(itemId);
  };

  subtractItem = itemId => {
    const { bookSelected } = this.props;
    const { quantity } = bookSelected.find(book => book.id === itemId) || {};
    if (quantity && quantity > 1) {
      this.props.subtractItem(itemId);
    } else {
      this.removeBook(itemId);
    }
  };

  removeBook = itemId => {
    this.props.removeItem(itemId);
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
    const showButton = !this.props.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    const { books, bookSelected } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {books.length ? (
            books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {bookSelected.length && <ShoppingCart addItem={this.addItem} removeItem={this.subtractItem} />}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ books, bookSelected }) => ({ books, bookSelected });

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionsCreators.getBooks()),
  searchBook: val => dispatch(actionsCreators.searchBook(val)),
  addToCart: item => dispatch(actionsCreators.addToCart(item)),
  addItem: itemId => dispatch(actionsCreators.addItem(itemId)),
  subtractItem: itemId => dispatch(actionsCreators.subtractItem(itemId)),
  removeItem: itemId => dispatch(actionsCreators.removeItem(itemId))
});

App.propTypes = {
  books: arrayOf(bookPropType),
  bookSelected: arrayOf(bookSelectedPropType).isRequired,
  getBooks: func.isRequired,
  searchBook: func.isRequired,
  addToCart: func.isRequired,
  addItem: func.isRequired,
  subtractItem: func.isRequired,
  removeItem: func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
