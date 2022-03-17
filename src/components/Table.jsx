import React from 'react';
import { Tag } from '@blueprintjs/core';
import { useSelector } from 'react-redux';
import { filteredTableState } from '../redux/tableSlice';

export default function Table() {
  // already filtered data passed as default state from Redux
  const filteredList = useSelector(filteredTableState);
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: 25,
      }}
    >
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {React.Children.toArray(
          filteredList.map((e) => {
            return (
              <>
                <Tag large minimal>
                  {e}
                </Tag>
              </>
            );
          })
        )}
      </section>
    </main>
  );
}
