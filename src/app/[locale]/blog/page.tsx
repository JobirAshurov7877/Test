"use client";
import AllArticles from "@/widgets/blog/AllArticles";
import Categories from "@/widgets/blog/Categories";
import Header from "@/widgets/blog/Header";
import Subscribe from "@/widgets/blog/Subscribe";
import TopArticles from "@/widgets/blog/TopArticles";
import styled from "styled-components";

export default function Blog() {
  return (
    <Container>
      <Header />
      <Categories />
      <AllArticles />
      <TopArticles />
      <Subscribe />
    </Container>
  );
}
const Container = styled.main``;
