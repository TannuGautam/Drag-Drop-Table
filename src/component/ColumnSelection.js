import React from 'react';
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";


const DragHandle = sortableHandle(({ value }) => (

  <h2 className='colbox'>{value}</h2>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <div className='col-subsections'>{children}</div>;
});

const SortableItem = sortableElement(({value}) => (
  <div>
    
    <DragHandle value={value}/>
  </div>
));


const ColumnSelection = ({data,onSortEnd}) => {


  return <div className='col-selection'>
      <p>Dimensions and Metrics</p>
      <SortableContainer  axis="xy" onSortEnd={onSortEnd} useDragHandle>
      {data && data.items ? data.items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} value={value} />
        )):''}
      </SortableContainer>

      {/* <div className='col-subsections'>
      Date
        <h2 className='colbox'>App</h2>
        <h2 className='colbox'>Clicks</h2>
        <h2 className='colbox'>Ad Requests</h2>
        <h2 className='colbox'>Ad Response</h2>
        <h2 className='colbox'>Impression</h2>
        <h2 className='colbox'>Revenue</h2>
        <h2 className='colbox'>Fill Rate</h2>
        <h2 className='colbox'>CTR</h2>
      </div> */}
      
  </div>;
};

export default ColumnSelection;
