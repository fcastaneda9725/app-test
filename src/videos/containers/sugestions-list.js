import React,{ Component } from 'react'
import { FlatList, Text } from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestions'

class SuggestionList extends Component {
    
    renderEmpty = () => <Empty text="No hay sugerenecias"/>
    
    itemSeparator = () => <Separator />

    renderItem = ({ item }) => {
        return(
            <Suggestion {...item}/>
        )
    }
    render(){
        const list = [
            {
                title: 'Titulo',
                key: '1'
            },
            {
                title: 'Titulo 2',
                key: '2'
            },
            {
                title: 'Titulo 3',
                key: '3'
            }
        ]
       return (
           <Layout title="Recomendado para ti">
                <FlatList
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

export default SuggestionList