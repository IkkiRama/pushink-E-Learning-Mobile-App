import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS, images } from "../../constants";
import { ImageBackground } from "react-native";

const KostCarousel = ({ ImageKos = [] }) => {
  const flatlistRef = useRef();
  const widthCarousel = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoadedImage, setIsLoadedImage] = useState(true);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === ImageKos.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (data, index) => ({
    length: widthCarousel,
    offset: widthCarousel * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
    index: index,
  });

  const renderCarouselItem = ({ item, index }) => {
    return (
      <View key={index} style={{ height: "100%" }}>
        {Object.keys(ImageKos).length === 0 ? (
          ""
        ) : (
          <ImageBackground source={images.defaultBanner}>
            <Image
              onLoad={() => setIsLoadedImage(false)}
              source={
                isLoadedImage
                  ? images.defaultBanner
                  : {
                      uri: `https://api.bem-unsoed.com/api/kost/image/${item.image}`,
                    }
              }
              style={{ height: "100%", width: widthCarousel }}
              resizeMode={isLoadedImage ? "contain" : "cover"}
            />
          </ImageBackground>
        )}
      </View>
    );
  };

  const handleScroll = (event) => {
    // get user scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = parseInt((scrollPosition / widthCarousel).toFixed());
    setActiveIndex(index);
  };

  const renderIndexIndicators = (activeIndex) =>
    Object.keys(ImageKos).length === 0
      ? ""
      : ImageKos.map((dot, index) => {
          return (
            <View key={index} style={styles.indexImageContainer}>
              <View style={styles.indexImage}>
                <Text style={styles.indexImageText}>{`${activeIndex + 1}/${
                  ImageKos.length
                }`}</Text>
              </View>
            </View>
          );
        });

  return (
    <>
      <FlatList
        horizontal
        ref={flatlistRef}
        key={ImageKos}
        data={ImageKos}
        pagingEnabled={true}
        onScroll={handleScroll}
        getItemLayout={getItemLayout}
        renderItem={renderCarouselItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={{ height: 250, position: "relative" }}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderIndexIndicators(activeIndex)}
      </View>
    </>
  );
};

export default KostCarousel;

const styles = StyleSheet.create({
  imageSlider: {
    height: 300,
  },
  indexImageContainer: {
    position: "relative",
  },
  indexImageContainer: {
    position: "absolute",
    bottom: 20,
    right: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: "rgba(250, 250, 252, 0.4)",
    backgroundColor: "rgba(250, 250, 252, 0.4)",
  },
  indexImageText: {
    fontWeight: "600",
    color: COLORS.font,
  },
});
