import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
               placeholder="Поиск"
               value={filter.query}
               onChange={(e) => setFilter({sort: filter.sort, query: e.target.value})}
            />
            <MySelect
               defaultValue="Сортировка по"
               option={[
                  { value: "title", name: "по названию" },
                  { value: "body", name: "по описанию" },
               ]}
               value={filter.sort}
               onChange={(value) => setFilter({sort: value, query: filter.query})}
            />
         </div>
    );
};

export default PostFilter;