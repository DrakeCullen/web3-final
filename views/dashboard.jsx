import React from 'react'
import Layout from './layout'
import Banner from './components/authBanner'
import Item from './components/item'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Posts from './components/posts';


function Dashboard(props) {
  //let posts = <PostsTable posts={props.posts} />
  return (
    <Layout title={props.title}>
      <Banner name={props.user.firstName} desc="Dashboard" />
      <Posts posts={props.posts} action="/sms" phrase='Send Message'/>
    </Layout>
  );
}

module.exports = Dashboard;
