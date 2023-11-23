
import Add1 from '../components/Add1'

const HelpIra = () => {
    return (
        <div className="group-3">
          <div className="wrapper">
            <div className="question">
              <p className="text-wrapper-3">Comment fonctionne la Inrealart ?</p>
              <Add1 className="add" color="#2B3058" />
            </div>
            <div className="question">
              <div className="text-wrapper-3">Pour qui ?</div>
              <Add1 className="add" color="#2B3058" />
            </div>
            <div className="question">
              <p className="text-wrapper-3">Y a t’il un guide de démarrage ?</p>
              <Add1 className="add" color="#2B3058" />
            </div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-2">FAQ</div>
            <p className="text-wrapper-4">
              Bien souvent vous avez des questions légitime alors nous avons anticipé cela ! Et si vous avez une autre
              question consulter la page FAQ
            </p>
            <div className="link-button">
              <button className="button">
                <div className="text-wrapper-5">Consulter la FAQ</div>
              </button>
            </div>
          </div>
        </div>


    )
}

export default HelpIra