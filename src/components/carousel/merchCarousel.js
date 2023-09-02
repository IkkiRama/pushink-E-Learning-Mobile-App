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

const MerchCarousel = ({ widthCarousel }) => {
  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoadedImage, setIsLoadedImage] = useState(true);
  const [ImageCarousel, setImageCarousel] = useState([
    {
      id: "Q4cUfTVGnVO80SlUx5t6",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2FGENSOED%20MERCH%20slide%201.jpg?alt=media&token=24b3d55c-c819-4952-b96e-9be1af5e2db1",
    },
    {
      id: "i4Ko2tNO8oBD1d3occ98",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2FGENSOED%20MERCH%20slide%202.jpg?alt=media&token=9b46e5fa-177b-4b2f-8ea5-9cba94422481",
    },
  ]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === ImageCarousel.length - 1) {
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
      //   <View key={index} style={{ height: "100%", width: "100%" }}>
      Object.keys(ImageCarousel).length === 0 ? (
        ""
      ) : (
        <ImageBackground source={images.defaultBanner}>
          <Image
            onLoad={() => setIsLoadedImage(false)}
            source={
              isLoadedImage
                ? images.defaultBanner
                : {
                    uri: item.image,
                  }
            }
            style={{ height: "100%", width: widthCarousel }}
            resizeMode={isLoadedImage ? "contain" : "cover"}
          />
        </ImageBackground>
      )
      //   </View>
    );
  };

  const handleScroll = (event) => {
    // get user scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = parseInt((scrollPosition / widthCarousel).toFixed());
    setActiveIndex(index);
  };

  const renderIndexIndicators = (activeIndex) =>
    Object.keys(ImageCarousel).length === 0
      ? ""
      : ImageCarousel.map((dot, index) => {
          return (
            <View key={index} style={styles.indexImageContainer}>
              <View style={styles.indexImage}>
                <Text style={styles.indexImageText}>{`${activeIndex + 1}/${
                  ImageCarousel.length
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
        key={ImageCarousel}
        data={ImageCarousel}
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

export default MerchCarousel;

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
