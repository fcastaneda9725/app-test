import React,{ Component } from 'react'
import { Text, View, Image, StyleSheet, FlatList } from 'react-native'
import Empty from '../components/empty'
import Separator from '../../sections/components/horizontal-separator'
import Category from '../components/category'
import Layout from '../components/category-list-layout'

class CategoryList extends Component {
    renderEmpty = () => <Empty text="No hay categorias :("/>
    
    itemSeparator = () => <Separator />

    renderItem = ({ item }) => {
        return(
            <Category {...item}/>
        )
    }

    keyExtractor = (item) => item.id.toString()
    
    render(){
        return(
            <Layout title="Categorías">
                <FlatList
                    horizontal={true}
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

export default CategoryList