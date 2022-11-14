import React, { Component } from 'react'
import { addBlogComment, BlogbyURL, blogCategory, blogCommentList } from '../../action/BlogAction';
import BlogDetail from '../../components/blog/blogDetails'

import constant from '../../constant';
import { getStorage } from '../../utils';


export default class blogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getStorage(constant.keys.userDetails),
      blogCategory: undefined,
      tags: [],
      // recentCommentList: [],
    }

  }


  componentDidMount() {
    window.scrollTo(0, 0);
    const url = this.props.match.params.url
    BlogbyURL(url).then((res) => {
      let finalTag = []
      res.result.list.map((ele, index) => {
        if (ele.TAG.includes(",")) {
          let arr = ele.TAG.split(",")
          arr.map((tg) => {
            if (tg != "") {
              finalTag.push(tg)
            }
          })
        }
        else {
          finalTag.push(ele.TAG)
        }
      })

      finalTag = [...new Set(finalTag)]

      // document.title = res.result.data.BLOG_TITLE
      this.setState({ data: res.result.data, tags: finalTag })


    }).catch((err) => {
      alert(err)
    })


  }


  render() {
    const { data } = this.state

    return (
      < React.Component >
        {data && <BlogDetail
          detail={data}
          blogCategory={this.state.blogCategory}
        />
        }
      </React.Component>
    )
  }

}
