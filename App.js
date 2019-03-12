/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/sugestions-list'
import API from './utils/api'
import CategoryList from './src/videos/containers/category-list'

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList:[],
    categoryList:[]
  }
  async componentDidMount() {
    const movies = await API.getSugerencias(10)
    const categories = await API.getMovies()
    console.log(movies)
    console.log(categories)
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <CategoryList
          list={this.state.categoryList}
        />
        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
}
