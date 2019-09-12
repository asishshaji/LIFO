import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

const AnimatedTouch = Animated.createAnimatedComponent(TouchableOpacity);

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    selected: 0,
    bottom: new Animated.Value(-55),
  };

  componentDidMount() {
    Animated.timing(this.state.bottom, {
      toValue: 12,
      duration: 800,
      easing: Easing.linear,
    }).start();
  }

  renderLogin() {
    console.disableYellowBox = true;
    return (
      <View style={styles.formContainer}>
        <Text style={styles.loginHeader}>LOGIN</Text>
        <View style={styles.collectionContainer}>
          <Fumi
            label={'USERNAME'}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={'#7771ab'}
            inputPadding={16}
            labelHeight={20}
            inputStyle={{
              color: '#6c6c6c',
              fontFamily: 'OpenSans-Regular',
            }}
            borderHeight={2}
            // TextInput props
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <Fumi
            label={'PASSWORD'}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            iconColor={'#7771ab'}
            inputPadding={16}
            labelHeight={20}
            inputStyle={{
              color: '#6c6c6c',
              fontFamily: 'OpenSans-Regular',
            }}
            borderHeight={2}
            // TextInput props
            secureTextEntry={true}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 10,
            marginTop: 20,
          }}>
          <Text style={{fontFamily: 'OpenSans-Regular'}}>
            don't have an account
          </Text>
          <TouchableOpacity onPress={() => this.setState({selected: 1})}>
            <Text style={{fontFamily: 'OpenSans-Regular'}}>Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderSignUp() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.loginHeader}>SIGNUP</Text>
        <View style={styles.collectionContainer}>
          <Fumi
            label={'USERNAME'}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={'#7771ab'}
            inputPadding={16}
            labelHeight={20}
            inputStyle={{
              color: '#6c6c6c',
              fontFamily: 'OpenSans-Regular',
            }}
            borderHeight={2}
            // TextInput props
            autoCapitalize={'none'}
            autoCorrect={false}
          />

          <Fumi
            label={'PHONE'}
            iconClass={FontAwesomeIcon}
            iconName={'phone'}
            iconColor={'#7771ab'}
            inputPadding={16}
            labelHeight={20}
            inputStyle={{
              color: '#6c6c6c',
              fontFamily: 'OpenSans-Regular',
            }}
            borderHeight={2}
            // TextInput props
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <Fumi
            label={'PASSWORD'}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            iconColor={'#7771ab'}
            inputPadding={16}
            labelHeight={20}
            inputStyle={{
              color: '#6c6c6c',
              fontFamily: 'OpenSans-Regular',
            }}
            borderHeight={2}
            // TextInput props
            secureTextEntry={true}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 10,
            marginTop: 20,
          }}>
          <Text style={{fontFamily: 'OpenSans-Regular'}}>have an account</Text>
          <TouchableOpacity onPress={() => this.setState({selected: 0})}>
            <Text style={{fontFamily: 'OpenSans-Regular'}}>Login here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={{flex: 1}}>
        {/* Submit button */}
        <AnimatedTouch
          style={{
            elevation: 10,
            height: 55,
            width: 55,
            borderRadius: 55 / 2,
            position: 'absolute',
            bottom: this.state.bottom,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7771ab',
            zIndex: 100000,
          }}
          activeOpacity={1}
          onPress={() => this.props.navigation.navigate('VideoScreen')}>
          <FontAwesomeIcon name="chevron-right" size={16} color="#fff" raised />
        </AnimatedTouch>
        <View style={styles.container}>
          <ScrollView>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
              <Image
                source={{
                  uri:
                    'https://cdn.dribbble.com/users/791530/screenshots/7118239/media/0954046409b9f833e5e92d9ef1ffcd5c.png',
                }}
                style={styles.logoStyle}
              />
            </View>

            {/* Form Section */}
            {this.state.selected === 0
              ? this.renderLogin()
              : this.renderSignUp()}
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
  logoContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collectionContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  formContainer: {
    flex: 2,
    padding: 15,
  },
  loginHeader: {
    // marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#7771ab',
  },
});
