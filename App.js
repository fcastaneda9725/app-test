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

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList:[]
  }
  async componentDidMount() {
    const movies = await API.getSugerencias(10)
    console.log(movies)
    this.setState({
      suggestionList: movies
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categorías</Text>
        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
}
