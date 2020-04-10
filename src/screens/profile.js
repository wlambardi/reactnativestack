import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useTheme, Surface, Avatar, Button, Card, Title, Paragraph, List, Caption } from 'react-native-paper';

const AvatarImage = props => <Avatar.Image style={styles.avatar} source={{ uri: 'https://ca.slack-edge.com/T0C961FNK-UT5HFMXU1-03ad5fc82c53-512' }} />

export const Profile = (props) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  
  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView>
      <Surface style={styles.container}>

        <View style={styles.topRow}>
          <AvatarImage/>
          <View>
            <Title>Walter J. Lambardi</Title>
            <Caption style={styles.handle}>React Native Developer at @Mediamonks</Caption>
          </View>
        </View>

        <View style={styles.contentMargin}>
        <Title style={styles.cardTitle}>Card title</Title>
        <Paragraph>The head of the World Health Organization defended the organization's 
        response to the coronavirus pandemic, at one point directly responding to criticisms 
        leveled by President Donald Trump.</Paragraph>
        </View>

        <List.Section title="Accordions" style={styles.accordion}>
          <List.Accordion
            title="Uncontrolled Accordion"
            left={props => <List.Icon {...props} icon="briefcase-account" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="test Accordion"
            left={props => <List.Icon {...props} icon="bank" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
            <List.Item title="Third item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={props => <List.Icon {...props} icon="bell" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </Surface>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentMargin: {
    paddingHorizontal: 20,
  },
  accordion: {
    padding:5,
  },
  cardTitle:{
      marginTop:20,
      padding:0,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:20,
    paddingTop:20,
  },
  handle: {
    marginRight: 3,
    lineHeight: 12,
  },
  avatar: {
    marginRight: 20,
  },
});
