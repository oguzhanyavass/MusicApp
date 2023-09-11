import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, View } from "react-native";
import music_data from "./music-data.json";
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar";

function App() {
  const renderSong = ({ item }) => <SongCard song={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = (text) => {
    const filteredList = music_data.filter((song) => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    });
    setList(filteredList);
  };

  const [list, setList] = useState(music_data);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252422",
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#403D39",
  },
});
