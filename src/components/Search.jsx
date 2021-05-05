import React from 'react';
import { TextInput, Button, Icon, RadioGroup } from 'react-materialize';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.value }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <TextInput
          id='TextInput-4'
          label='Поиск'
          type='search'
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleKey}
        >
          <Button
            node='button'
            waves='light'
            small
            onClick={() => {
              this.props.searchMovies(this.state.search, this.state.type);
            }}
            icon={<Icon>search</Icon>}
            className='search-btn'
          />
        </TextInput>
        <div className='search-radio'>
          <RadioGroup
            label='Фильтр'
            name='type'
            onChange={this.handleFilter}
            options={[
              {
                label: 'Все',
                value: 'all',
              },
              {
                label: 'Только фильмы',
                value: 'movie',
              },
              {
                label: 'Только сериалы',
                value: 'series',
              },
            ]}
            value={this.state.type}
            withGap
          />
        </div>
      </>
    );
  }
}

export { Search };
