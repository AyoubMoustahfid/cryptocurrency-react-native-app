import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, Image,FlatList, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'

const  DATA = [
    {
      id: "bitcoin",
      rank: "1",
      symbol: "BTC",
      name: "Bitcoin",
      supply: "17193925.0000000000000000",
      maxSupply: "21000000.0000000000000000",
      marketCapUsd: "119150835874.4699281625807300",
      volumeUsd24Hr: "2927959461.1750323310959460",
      priceUsd: "6929.8217756835584756",
      changePercent24Hr: "-0.8101417214350335",
      vwap24Hr: "7175.0663247679233209"
    },
    {
      id: "ethereum",
      rank: "2",
      symbol: "ETH",
      name: "Ethereum",
      supply: "101160540.0000000000000000",
      maxSupply: null,
      marketCapUsd: "40967739219.6612727047843840",
      volumeUsd24Hr: "1026669440.6451482672850841",
      priceUsd: "404.9774667045200896",
      changePercent24Hr: "-0.0999626159535347",
      vwap24Hr: "415.3288028454417241"
    },
    {
      id: "ripple",
      rank: "3",
      symbol: "XRP",
      name: "XRP",
      supply: "39299874590.0000000000000000",
      maxSupply: "100000000000.0000000000000000",
      marketCapUsd: "16517228249.2902868380922380",
      volumeUsd24Hr: "149328134.5032677889393019",
      priceUsd: "0.4202870472643482",
      changePercent24Hr: "-1.9518258685302665",
      vwap24Hr: "0.4318239230821224"
    },
    {
      id: "bitcoin-cash",
      rank: "4",
      symbol: "BCH",
      name: "Bitcoin Cash",
      supply: "17278438.0000000000000000",
      maxSupply: "21000000.0000000000000000",
      marketCapUsd: "11902454455.1536127997298894",
      volumeUsd24Hr: "287075418.5202079328968427",
      priceUsd: "688.8617162705108413",
      changePercent24Hr: "-1.5016094894459434",
      vwap24Hr: "711.6276356693412774"
    },
    {
      id: "eos",
      rank: "5",
      symbol: "EOS",
      name: "EOS",
      supply: "906245118.0000000000000000",
      maxSupply: "1000000000.0000000000000000",
      marketCapUsd: "6327688685.5053582732768780",
      volumeUsd24Hr: "373717579.0872289136334689",
      priceUsd: "6.9823147841833210",
      changePercent24Hr: "-0.2487845516123365",
      vwap24Hr: "7.0345139617072947"
    },
    {
      id: "stellar",
      rank: "6",
      symbol: "XLM",
      name: "Stellar",
      supply: "18770261348.0000000000000000",
      maxSupply: null,
      marketCapUsd: "4395265468.8039656236913164",
      volumeUsd24Hr: "28186508.6814478496347773",
      priceUsd: "0.2341611226032443",
      changePercent24Hr: "-3.4735437955390772",
      vwap24Hr: "0.2412082330289685"
    },
    {
      id: "litecoin",
      rank: "7",
      symbol: "LTC",
      name: "Litecoin",
      supply: "57731482.0000000000000000",
      maxSupply: "84000000.0000000000000000",
      marketCapUsd: "4234484929.6430299360674272",
      volumeUsd24Hr: "226037979.6802283949921417",
      priceUsd: "73.3479339685586096",
      changePercent24Hr: "-1.3117992300270579",
      vwap24Hr: "75.1659221835912383"
    },
    {
      id: "cardano",
      rank: "8",
      symbol: "ADA",
      name: "Cardano",
      supply: "25927070538.0000000000000000",
      maxSupply: "45000000000.0000000000000000",
      marketCapUsd: "3342664439.1225859377289638",
      volumeUsd24Hr: "32741914.1355823452856056",
      priceUsd: "0.1289256506716951",
      changePercent24Hr: "0.0079476596654900",
      vwap24Hr: "0.1310244403993645"
    },
    {
      id: "tether",
      rank: "9",
      symbol: "USDT",
      name: "Tether",
      supply: "2437140346.0000000000000000",
      maxSupply: null,
      marketCapUsd: "2439361941.9836262753306976",
      volumeUsd24Hr: "2257075318.3468977492592858",
      priceUsd: "1.0009115584940656",
      changePercent24Hr: "0.1166673925934855",
      vwap24Hr: "1.0089194093830538"
    },
    {
      id: "iota",
      rank: "10",
      symbol: "MIOTA",
      name: "IOTA",
      supply: "2779530283.0000000000000000",
      maxSupply: "2779530283.0000000000000000",
      marketCapUsd: "2403573545.0265314556170093",
      volumeUsd24Hr: "39603276.8327675426897915",
      priceUsd: "0.8647409095440071",
      changePercent24Hr: "-5.2486878154413840",
      vwap24Hr: "0.8988184197561133"
    }
]




function Home() {
    const integer = 404.9774667045200896
    const volumeUsd24Hr = 39299874590

    const [data, setData] = useState('')

    useEffect(() => {
        fetch('api.coincap.io/v2/assets', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            setData(res)
        })
    })

    const renderItem = ({ item }) => (
        <View style={{
            backgroundColor: 'white',
            borderRadius: 5,
            elevation: 5,
            marginVertical: 10,
            marginHorizontal: 5,
            padding: 10
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View >
                        <Image 
                            source={require('./../assets/images/cryptocurrency-logo.jpg')} 
                            style={{width:50, height: 50}}/>
                    </View>
                    <View>
                        <Text style={{fontSize: 15}}>{item.name}</Text>
                        <Text style={styles.small}>{item.symbol}</Text>
                    </View>
                </View>
    
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'flex-end'
                }}>
                   <Text style={{fontSize: 15, fontWeight: 'bold'}}>${item.supply.toString().substring(14, 0)}</Text>
                   <Text style={{fontSize: 12}}>{item.priceUsd.toString().substring(5, 2)} {item.symbol}</Text>
                </View>
            </View>  
            <TouchableOpacity style={{
                backgroundColor: 'blue',
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
                borderRadius: 10
            }}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Reservation</Text>
            </TouchableOpacity>
        </View>
    );
    
    return (
        <ScrollView
        contentContainerStyle={{
                padding: 20,
                paddingTop: 50
            }}
        >
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingVertical: 5
        }}>Trending</Text>
        <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
            <View style={{
                flexDirection: 'row'
            }}>
                <View >
                    <Image 
                        source={require('./../assets/images/cryptocurrency-logo.jpg')} 
                        style={{width:50, height: 50}}/>
                </View>
                <View>
                    <Text style={styles.text}>Hello Swiper</Text>
                    <Text style={styles.small}>BTC</Text>
                </View>
            </View>
            <View>
                <Text style={styles.priceUsd}>${integer.toString().substring(11, 0)}</Text>
                <Text>
                    {
                        volumeUsd24Hr >=  39299874590 ? (
                            <Text style={{color: 'green', fontWeight: 'bold'}}>+{volumeUsd24Hr.toString().substring(2, 0)}%</Text>
                        ): (
                            <Text style={{color: 'red', fontWeight: 'bold'}}>-{volumeUsd24Hr.toString().substring(2, 0)}%</Text>
                        )
                    }
                </Text>
            </View>
        </View>
        <View style={styles.slide1}>
        <View style={{
            flexDirection: 'row'
        }}>
            <View >
                <Image 
                    source={require('./../assets/images/cryptocurrency-logo.jpg')} 
                    style={{width:50, height: 50}}/>
            </View>
            <View>
                <Text style={styles.text}>Hello Swiper</Text>
                <Text style={styles.small}>BTC</Text>
            </View>
        </View>
        <View>
            <Text style={styles.priceUsd}>${integer.toString().substring(11, 0)}</Text>
            <Text>
                {
                    volumeUsd24Hr >=  39299874590 ? (
                        <Text style={{color: 'green', fontWeight: 'bold'}}>+{volumeUsd24Hr.toString().substring(2, 0)}%</Text>
                    ): (
                        <Text style={{color: 'red', fontWeight: 'bold'}}>-{volumeUsd24Hr.toString().substring(2, 0)}%</Text>
                    )
                }
            </Text>
        </View>
    </View>
    <View style={styles.slide1}>
    <View style={{
        flexDirection: 'row'
    }}>
        <View >
            <Image 
                source={require('./../assets/images/cryptocurrency-logo.jpg')} 
                style={{width:50, height: 50}}/>
        </View>
        <View>
            <Text style={styles.text}>Hello Swiper</Text>
            <Text style={styles.small}>BTC</Text>
        </View>
    </View>
    <View>
        <Text style={styles.priceUsd}>${integer.toString().substring(11, 0)}</Text>
        <Text>
            {
                volumeUsd24Hr >=  39299874590 ? (
                    <Text style={{color: 'green', fontWeight: 'bold'}}>+{volumeUsd24Hr.toString().substring(2, 0)}%</Text>
                ): (
                    <Text style={{color: 'red', fontWeight: 'bold'}}>-{volumeUsd24Hr.toString().substring(2, 0)}%</Text>
                )
            }
        </Text>
    </View>
</View>
        </Swiper>

        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.rank}
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 200,
    },
    slide1: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
        borderWidth: 0.2,
        borderRadius: 3
    },
   
    text: {
      color: '#000',
      fontSize: 27,
      fontWeight: 'bold'
    },
    small:{
        color: '#000'
    },
    priceUsd: {
        color: '#000',
        fontSize: 20,
        paddingTop: 20,
        fontWeight: 'bold'
    }
  })

export default Home
