import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Platform,
  Button,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import YouTube from 'react-native-youtube';

export default class VideoScreen extends React.Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: false,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    playerWidth: Dimensions.get('window').width,
    focus: false,
    focusOverlayOpacity: new Animated.Value(0),
  };

  _youTubeRef = React.createRef();

  renderOverlay = () => {
    Animated.timing(this.state.focusOverlayOpacity, {
      toValue: 0.2,
      duration: 100,
      easing: Easing.linear,
    }).start();
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'black',
          zIndex: 10000,
          height: PixelRatio.roundToNearestPixel(
            this.state.playerWidth / (16 / 9),
          ),
          opacity: this.state.focusOverlayOpacity,
        }}>
        <Text>Hi</Text>
      </Animated.View>
    );
  };

  renderNullOverlay = () => {
    this.state.focusOverlayOpacity.setValue(0);
    return null;
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.focus ? (
          <View>{this.renderOverlay()}</View>
        ) : (
          <View>{this.renderNullOverlay()}</View>
        )}
        <TouchableOpacity
          onPress={() => this.setState({focus: !this.state.focus})}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            // zIndex: 10000,
            height: PixelRatio.roundToNearestPixel(
              this.state.playerWidth / (16 / 9),
            ),
          }}>
          <Text>Hi</Text>
        </TouchableOpacity>
        <YouTube
          ref={this._youTubeRef}
          // You must have an API Key for the player to load in Android
          apiKey="AIzaSyBWM1VpmOq7XlngwBczBEIhmk4JC2kUj4w"
          // Un-comment one of videoId / videoIds / playlist.
          // You can also edit these props while Hot-Loading in development mode to see how
          // it affects the loaded native module
          videoId="ewRw996uevM"
          // videoIds={['uMK0prafzw0', 'qzYgSecGQww', 'XXlZfc1TrD0', 'czcjU1w-c6k']}
          // playlistId="PLF797E961509B4EB5"
          play={this.state.isPlaying}
          loop={this.state.isLooping}
          fullscreen={this.state.fullscreen}
          controls={2}
          style={[
            {
              height: PixelRatio.roundToNearestPixel(
                this.state.playerWidth / (16 / 9),
              ),
            },
            styles.player,
          ]}
          onError={e => {
            this.setState({error: e.error});
          }}
          onReady={e => {
            this.setState({isReady: true});
          }}
          onChangeState={e => {
            this.setState({status: e.state});
          }}
          onChangeQuality={e => {
            this.setState({quality: e.quality});
          }}
          onChangeFullscreen={e => {
            this.setState({fullscreen: e.isFullscreen});
          }}
          onProgress={e => {
            this.setState({currentTime: e.currentTime});
          }}
        />
        {/* Playing / Looping
        <View style={styles.buttonGroup}>
          <Button
            title={this.state.status == 'playing' ? 'Pause' : 'Play'}
            color={this.state.status == 'playing' ? 'red' : undefined}
            onPress={() => {
              this.setState(state => ({isPlaying: !state.isPlaying}));
            }}
          />
          <Text> </Text>
          <Button
            title={this.state.isLooping ? 'Looping' : 'Not Looping'}
            color={this.state.isLooping ? 'green' : undefined}
            onPress={() => {
              this.setState(state => ({isLooping: !state.isLooping}));
            }}
          />
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    // marginVertical: 10,
  },
});
