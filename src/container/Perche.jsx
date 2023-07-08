import React from 'react'
import HeadingSec  from '../components/HeadingSec';
import PercheCard from '../components/PercheCard';
import images from '../constants/images';

const Perche = () => {
  return (
    <>
    <div className='container sections__padding' id='whySire'>
      <div className="row">
        <div className='col-12'>
          <HeadingSec title="Perchè S.I.R.E." />
        </div>
      </div>

      <div className='row py-4'>
        <div className='col-md-4 mb-3'>
          <PercheCard imgUrl={images.perche01} title={'Risparmio Energetico'} desc={`Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.`}/>
        </div>
        <div className='col-md-4 mb-3'>
          <PercheCard imgUrl={images.perche02} title={'Risparmio Energetico'} desc={`Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.`}/>
        </div>
        <div className='col-md-4 mb-3'>
          <PercheCard imgUrl={images.perche03} title={'Risparmio Energetico'} desc={`Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.`}/>
        </div>
      </div>

    </div>

    <div className='container-fluid percheMiniCards'>
      <div className='row container mx-auto'>
        <div className='col-md-3  my-3'>
          <PercheCard imgUrl={images.perche04} title={'Risparmio Energetico'} desc={'Superbonus'}/>
        </div>

        <div className='col-md-3 my-3'>
          <PercheCard imgUrl={images.perche05} title={'Risparmio Energetico'} desc={'Superbonus'}/>
        </div>

        <div className='col-md-3 my-3'>
          <PercheCard imgUrl={images.perche06} title={'Risparmio Energetico'} desc={'Superbonus'}/>
        </div>

        <div className='col-md-3 my-3'>
          <PercheCard imgUrl={images.perche07} title={'Risparmio Energetico'} desc={'Superbonus'}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Perche
