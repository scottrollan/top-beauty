import React, { useState, useEffect } from 'react';
import { getAllInventory } from '../firestore/index';
import { Figure } from 'react-bootstrap';
import styles from './Home.module.scss';

export default function Home() {
  const [items, setItems] = useState([]);
  const figureWidth = 300;
  useEffect(() => {
    const getItems = async () => {
      setItems([]);
      try {
        const inventory = await getAllInventory();
        inventory.forEach((item) => {
          console.log(item.images);
          setItems([...items, item]);
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    getItems();
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.figureLayout}>
        {items.map((i) => {
          return (
            <Figure key={i.inventoryId} style={{ maxWidth: figureWidth }}>
              <Figure.Image
                width={figureWidth}
                height={375}
                src={`${i.images[0]}`}
                alt="coming soon"
              />
              <Figure.Caption style={{ textAlign: 'center' }}>
                <h4>${i.retailPrice}</h4>
                <h6>{i.itemName}</h6>
                <p>{i.itemDescription}</p>
              </Figure.Caption>
            </Figure>
          );
        })}
      </div>
    </div>
  );
}
