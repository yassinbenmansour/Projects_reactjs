import React, { Component } from 'react'

 function Count (){
    const [count , setCount] = React.useState(0);

    return (
    <main>
        <section className='container'>
        <div className='coutainer'>
            
                            <p className='lead'>
                                <span className='bg bg-danger text-white rounded p-2'>
                                    {count}
                                </span>
                            </p>
                            <div className='form-group'>
                                <button onClick={ () => setCount(count + 1)} className='btn btn-primary btn-sm'> + </button>
                                <button onClick={ () => setCount(count - 1)} className='btn btn-primary btn-sm'> - </button>

                            </div>
                        </div>
                
        </section>
    </main>

    );
 }
export default Count;
