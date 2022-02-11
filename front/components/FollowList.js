import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { List, Card, Button } from 'antd';
import styled from 'styled-components';
import { StopOutlined } from '@ant-design/icons';

const StyledButtonDiv = styled.div`
  text-align: center;
  margin: 10px 0;
`

const FollowList = ({header, data}) =>{
  const style = useMemo(()=>({
    marginBottom: '20px',
  }), []);

  return (
    <List style={style}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 3,
        xl: 6,
        xxl: 3,
      }}
      size="small"
      header={ <div>{header}</div> }
      loadMore={<StyledButtonDiv><Button>더보기</Button></StyledButtonDiv>}
      bordered
      dataSource={ data }
      renderItem={ (item) =>(
        <List.Item>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  )
};

FollowList.propTypes = {
  header: propTypes.string.isRequired,
  data: propTypes.arrayOf(propTypes.object)
}

export default FollowList;