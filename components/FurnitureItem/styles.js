import { StyleSheet, Dimensions} from 'react-native'; 

const styles = StyleSheet.create ({
    furnitureContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
    
      title: {
        fontSize: 40, 
        fontWeight: '600'
      },
    
      subtitle: {
        fontSize: 16,
        color: '#5c5e62',
      }, 
    
      image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },

      buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
      },

      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },

      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },

      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },

      buttonOpen: {
        backgroundColor: "#F194FF",
      },

      buttonClose: {
        backgroundColor: "#171A20CC",
      },

      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },

      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});

export default styles;