
import React from 'react';
import styled from 'styled-components';
import BubbleChartGrouped from '../index';

describe('Bubble chart Grouped', () => {
  const width = 300;
  const height = 300;
  const selectedCategory = null;
  const selectedNode = null;
  const category = {
    id: 1,
    name: 'Special Category',
    value: 123456,
    percentage: 80
  };
  const bubbles = [
    {
      id: 2,
      name: 'Credit Card',
      value: 212000,
      categoryId: 1,
      categoryName: 'Special Category'
    },
    {
      id: 3,
      name: 'Religion',
      value: 90000,
      categoryId: 1,
      categoryName: 'Special Category'
    },
    {
      id: 4,
      name: 'IBAN',
      value: 82000,
      categoryId: 1,
      categoryName: 'Special Category'
    },
    {
      id: 5,
      name: 'SSN',
      value: 202000,
      categoryId: 1,
      categoryName: 'Special Category'
    },
    {
      id: 6,
      name: 'Gender',
      value: 322000,
      categoryId: 1,
      categoryName: 'Special Category'
    }
  ];
  const colorsMapping = {
    1: '#1E61B8',
    2: '#1C8ADD',
    3: '#3BC6FF',
    4: '#07E1D4',
    5: '#01E9A3'
  };
  const StyledMarker = styled.p`
    & {
      display: flex;
      align-items: center;
    }
    &:before {
      display: inline-block;
      margin-right: 0.5rem;
      border-radius: 55rem;
      height: 0.75rem;
      width: 0.75rem;
      background-color: ${props => props.bgColor};
      content: '';
    }
  `;
  const tooltipContent = data => (
    <div className="d-flex flex-column justify-content-between">
      <h5>
        {data.data.data.nodeSource.categoryName}
      </h5>
      <StyledMarker bgColor={colorsMapping[data.data.data.nodeSource.categoryId]}>
        {data.data.data.nodeSource.categoryName}
      </StyledMarker>
      <p className="text-light">
        {data.data.data.nodeSource.value}
        {' Hits'}
      </p>
      <p className="text-light">
        {data.data.data.nodeSource.value}
        {' Update hits'}
      </p>
    </div>
  );
  const props = {
    width,
    height,
    category,
    data: bubbles,
    tooltipContent,
    colors: colorsMapping,
    selectedCategory,
    selectedNode,
    handleClick: jest.fn()
  };
  const component = shallow(<BubbleChartGrouped {...props} />);
  const mountedComponent = mount(<BubbleChartGrouped {...props} />);

  it('should match snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render w/o optional props', () => {
    const requiredProps = {
      width,
      height,
      category,
      data: bubbles,
      tooltipContent,
      colors: colorsMapping
    };
    const newComponent = shallow(<BubbleChartGrouped {...requiredProps} />);
    expect(newComponent.find('BubbleChart').exists()).toBe(true);
    expect(newComponent.find('h4').exists()).toBe(true);
    expect(newComponent.find('p').exists()).toBe(true);
  });

  it('should render correct props', () => {
    expect(component.props().width).toBe(props.width);
    expect(component.props().height).toBe(props.height);

    expect(
      component
        .find('BubbleChart')
        .dive()
        .find('Bubble')
    ).toHaveLength(props.data.length);

    expect(component.find('BubbleChart').props().data).toEqual(props.data);
    expect(component.find('BubbleChart').props().colors).toEqual(props.colors);
    expect(component.find('BubbleChart').props().selectedCategory).toEqual(props.selectedCategory);
    expect(component.find('BubbleChart').props().selectedNode).toEqual(props.selectedNode);
  });

  it('should call handleClick', () => {
    const param = {
      nodeData: bubbles[0],
      selectedCategory: 1,
      selectedNode: null
    };
    const spyOn = jest.spyOn(mountedComponent.instance(), 'handleClick');
    mountedComponent.instance().forceUpdate();


    mountedComponent
      .find('Bubble')
      .at(0)
      .childAt(0)
      .simulate('click');
    expect(spyOn).toHaveBeenCalled();
    expect(spyOn).toHaveBeenCalledWith(param);
    expect(props.handleClick).toHaveBeenCalled();
    expect(props.handleClick).toHaveBeenCalledWith({
      nodeData: param.nodeData,
      selectedCategory: param.nodeData.categoryId,
      selectedNode: param.nodeData.id
    });
  });
});
