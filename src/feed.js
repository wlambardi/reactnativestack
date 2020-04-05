import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useTheme, Surface, Button, Headline, Avatar, Card, IconButton, Title, Paragraph, Divider } from 'react-native-paper';
import { AuthContext } from "./context";
import color from 'color';
import { AnimatedLoadImage } from './components/animated-load-image/AnimatedLoadImage';
export const Feed = (props) => {
  const theme = useTheme();
  const { signOut } = React.useContext(AuthContext);
  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();
  return (
    <ScrollView>
      <Surface style={styles.container}>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => 
              <Avatar.Image size={44} 
              source={{
                uri:
                  'https://ca.slack-edge.com/T0C961FNK-UT5HFMXU1-03ad5fc82c53-512',
              }}/>
            }
          />
          <Card.Content>
            <Title>Paragraph</Title>
            <Paragraph>
            Now that we know how to create a stack navigator with 
            some routes and navigate between those routes,
            let's look at how we can pass data to routes when we navigate to them.
            </Paragraph>

            <View style={styles.stdMarginVertical}>
              <AnimatedLoadImage
                source={{ uri: 'https://wallup.net/wp-content/uploads/2015/12/185200-nature-landscape-beach.jpg' }}
                style={[
                  styles.image,
                  {
                    borderColor: imageBorderColor,
                  },
                ]}
              />
            </View>
          </Card.Content>
        
          <Card.Actions>
            <Button icon="airplane-landing" style={{color:theme.colors.text, width:100, margin:10}} mode="outlined" onPress={()=> props.navigation.push('Details', { name: 'walter'})}>
              View
            </Button>
          </Card.Actions>
        </Card>
      </Surface>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  divider: {
    marginVertical:20,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    width: '100%',
    height: 150,
  },
  stdMarginVertical: {
    marginVertical: 20,
  }
});
